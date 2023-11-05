declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";