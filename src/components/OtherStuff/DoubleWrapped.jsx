import { SampleV5 } from "./SampleV5";
import { Bootstrap } from "../Bootstrap";

export const DoubleWrapped = () => {
  return (
    <Bootstrap version={4}>
      <p>This is a double-wrapped component with v4 surrounding a v5 form.</p>
      <SampleV5 />
    </Bootstrap>
  );
};
