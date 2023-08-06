import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader";

import styles from "./PageLoader.module.scss";

export const PageLoader = () => {
  return (
    <div className={classNames(styles.PageLoader, {}, [])}>
      <Loader />
    </div>
  );
};
