import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={classNames(styles["lds-ellipsis"], {}, [])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
