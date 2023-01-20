import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import SocialLinks from "../components/SocialLinks";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://randomuser.me/api/portraits/lego/0.jpg",
        }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>

        <SocialLinks
          type="twitter"
          label="John Doe's Twitter"
          link="https://twitter.com/"
        />
        <SocialLinks
          type="instagram"
          label="John Doe's Instagram"
          link="https://www.instagram.com/"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
    margin: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Profile;
