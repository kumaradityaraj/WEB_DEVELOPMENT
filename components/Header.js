import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <div className="flex items-center">
      <Button
        color="blue"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className=" h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
        <h1 className="hidden md:inline-flex ml-2 text-gray-700
        text-2xl">
            Docs
        </h1>
      </Button>
    </div>
  );
}
export default Header;
