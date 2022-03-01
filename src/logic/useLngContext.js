import { useContext } from "react";
import { Context } from "App";

export const useLngContext = (key, params = 0) => {
  let { value: lng, lngNames, fn } = useContext(Context);
  lng && lng[key] ? (lng = lng[key]) : (lng = null);

  switch (params) {
    case 0:
      return { lng };
    case 1:
      return { lngNames, fn };
    case 2:
      return { lng, lngNames, fn };
    default:
      return null;
  }
};
