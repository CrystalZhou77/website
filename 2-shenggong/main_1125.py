@app.route('/submit', methods=['POST'])
def submit():
    print("Received request:", request.form)  # 打印请求表单数据
    try:
        # 获取表单参数
        project_name = request.form.get('project_name')
        target_strength = float(request.form.get('target_strength', 0))
        promoter_numbers = int(request.form.get('promoter_numbers', 0))

        # 检查输入范围
        if not (0 < target_strength <= 100):
            return jsonify({"error": "目标强度必须在 0 到 100 之间！"}), 400
        if not (1 <= promoter_numbers <= 100):
            return jsonify({"error": "启动子数量必须在 1 到 100 之间！"}), 400

        # 检查 CSV 文件是否存在
        csv_file = os.path.join(csv_dir, "all_promoters.csv")
        if not os.path.isfile(csv_file):
            return jsonify({"error": "启动子数据文件不存在"}), 400

        # 读取 CSV 文件
        df = pd.read_csv(csv_file)

        # 验证 CSV 文件必要的列
        if 'Predicted Strength' not in df.columns or 'Score' not in df.columns:
            return jsonify({"error": "CSV 文件中缺少必要列 ('Predicted Strength' 或 'Score')"}), 400

        # 归一化 Predicted Strength 到 [0, 100] 并存入 Promoter Strength
        df['Promoter Strength'] = (
            (df['Predicted Strength'] - df['Predicted Strength'].min()) /
            (df['Predicted Strength'].max() - df['Predicted Strength'].min()) * 100
        ).round(2)

        # 计算与目标强度的绝对差值
        df['Strength_Difference'] = abs(df['Promoter Strength'] - target_strength)

        # 按 Strength_Difference 和 Score 排序：首先是 Strength_Difference 小的，其次是 Score 大的
        sorted_df = df.sort_values(by=['Strength_Difference', 'Score'], ascending=[True, False])

        # 选取前 promoter_numbers 条记录
        selected_df = sorted_df.head(promoter_numbers).reset_index(drop=True)

        # 仅保留 Promoter sequences 和 Promoter Strength 列
        result_df = selected_df[['Promoter Sequences', 'Promoter Strength']]

        # 保存结果到 CSV 文件
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        output_csv_file = f"target_{target_strength}_{promoter_numbers}_{timestamp}.csv"
        output_csv_path = os.path.join(output_dir, output_csv_file)

        # 添加项目名称行并保存
        with open(output_csv_path, 'w') as f:
            f.write(f"Project name: {project_name}\n")
            result_df.to_csv(f, index=False)

        # 返回最接近目标强度的前 10 条记录作为响应
        top_sequences = sorted_df.head(10)[['Promoter Sequences', 'Promoter Strength']].reset_index(drop=True)

        # 构建响应数据
        response_data = {
            "filename": output_csv_file,
            "top_sequences": top_sequences.to_dict(orient='records')
        }

        return jsonify(response_data)
    except ValueError as ve:
        return jsonify({"error": "输入数据格式有误，请检查"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
