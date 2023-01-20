import { render, screen, fireEvent } from "@testing-library/react-native";
import { Linking } from "react-native";
import SocialLinks from "../components/SocialLinks";

test("should render the label of the social link", () => {
  const { getByText } = render(
    <SocialLinks
      type="twitter"
      label="John Doe's Twitter"
      link="https://twitter.com/"
    />
  );

  const label = getByText("John Doe's Twitter");
  expect(label).toBeTruthy();
});

test("should render the icon of the social link", () => {
  const { getByRole } = render(
    <SocialLinks
      type="twitter"
      label="John Doe's Twitter"
      link="https://twitter.com/"
    />
  );

  const icon = getByRole("image");
  expect(icon).toBeTruthy();
});

test("should open the twiiter link when the twitter link is pressed", () => {
  const { getByText } = render(
    <SocialLinks
      type="twitter"
      label="John Doe's Twitter"
      link="https://twitter.com/"
    />
  );

  const label = getByText("John Doe's Twitter");
  fireEvent.press(label);
  expect(Linking.openURL).toHaveBeenCalledWith("https://twitter.com/");
});

test("should open the instagram link when the instagram link is pressed", () => {
  const { getByText } = render(
    <SocialLinks
      type="instagram"
      label="John Doe's Instagram"
      link="https://www.instagram.com/"
    />
  );

  const label = getByText("John Doe's Instagram");
  fireEvent.press(label);
  expect(Linking.openURL).toHaveBeenCalledWith("https://www.instagram.com/");
});
