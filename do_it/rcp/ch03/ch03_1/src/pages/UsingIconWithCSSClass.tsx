import { Icon } from "../components";

export default function UsingIconWithCSSClass() {
  return (
    <div>
      <h3>UsingIconWithCSSCalss</h3>
      <Icon name="home" className="text-blue" />
      <Icon
        name="check_circle_outline"
        className="text-red"
        style={{ fontSize: "30px" }}
      />
    </div>
  );
}
