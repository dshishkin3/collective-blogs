import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // отлавливаем файлы с ts, tsx
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    // обрабатываем loaders, файлы, которые выходят за рамки JS. (png,svg,css,typescript)
    typescriptLoader,
  ];
}
