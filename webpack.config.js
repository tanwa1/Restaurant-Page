// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
    mode: "development",
    entry: "./src/restoImport.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/restoTemplate.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/restoTemplate.html",
        }),
        
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets", to: "assets" }
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
