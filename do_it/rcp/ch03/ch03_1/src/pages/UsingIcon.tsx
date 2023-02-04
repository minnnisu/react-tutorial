import { Icon } from "../components";

export default function UsingIcon() {
  return (
    <div>
      <h3>UsingIcon</h3>
      <Icon name="home" style={{ color: "blue" }} />
      <Icon
        name="check_circle_outline"
        style={{ fontSize: "30px", color: "red" }}
      />
    </div>
  );
}
