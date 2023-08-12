import React, { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

export const BugButton = () => {
  const [error, setErorr] = useState(false);

  const onThrow = () => setErorr(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>throw error</Button>;
};
