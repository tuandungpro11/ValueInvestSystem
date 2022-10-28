import { lazy, Suspense } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function LazyLoading(importFunc: any) {
  const LazyComponent = lazy(importFunc);
  return function (props: any) {
    return (
      <Suspense
        fallback={
          <Backdrop open={true}>
            <CircularProgress />
          </Backdrop>
        }
      >
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

export default LazyLoading;
