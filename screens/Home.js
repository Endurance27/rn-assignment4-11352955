import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const featuredJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/facebook.png"),
    backgroundColor: "#E57373", // Deep red
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Google",
    salary: "$160,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/google.png"),
    backgroundColor: "#C5E1A5", // Deep green
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Microsoft",
    salary: "$150,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/microsoft.png"),
    backgroundColor: "#64B5F6", // Deep blue
  },
  {
    id: 4,
    title: "UX Designer",
    company: "Apple",
    salary: "$140,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/apple.png"),
    backgroundColor: "#9575CD", // Deep purple
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/facebook.png"),
    backgroundColor: "#E57373", // Deep red (repeated for example)
  },
  {
    id: 6,
    title: "Product Manager",
    company: "Google",
    salary: "$160,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/google.png"),
    backgroundColor: "#C5E1A5", // Deep green (repeated for example)
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "Microsoft",
    salary: "$150,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/microsoft.png"),
    backgroundColor: "#64B5F6", // Deep blue (repeated for example)
  },
  {
    id: 8,
    title: "UX Designer",
    company: "Apple",
    salary: "$140,000",
    location: "Accra, Ghana",
    logo: require("../assets/images/apple.png"),
    backgroundColor: "#9575CD", // Deep purple (repeated for example)
  },
];

const popularJobs = [
  {
    id: 1,
    title: "Jr Executive",
    company: "Burger King",
    salary: "$96,000/y",
    location: "Los Angeles, US",
    logo: require("../assets/images/burgur.png"),
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Beats",
    salary: "$84,000/y",
    location: "Florida, US",
    logo: require("../assets/images/beats.png"),
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Facebook",
    salary: "$86,000/y",
    location: "Florida, US",
    logo: require("../assets/images/facebook.png"),
  },
  {
    id: 4,
    title: "Marketing Specialist",
    company: "Spotify",
    salary: "$90,000/y",
    location: "New York, US",
    logo: require("../assets/images/spotify.png"),
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Amazon",
    salary: "$120,000/y",
    location: "Seattle, US",
    logo: require("../assets/images/amazon.png"),
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "Netflix",
    salary: "$110,000/y",
    location: "San Francisco, US",
    logo: require("../assets/images/netflix.png"),
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Airbnb",
    salary: "$100,000/y",
    location: "San Francisco, US",
    logo: require("../assets/images/airbnb.png"),
  },
  {
    id: 8,
    title: "Project Manager",
    company: "Uber",
    salary: "$115,000/y",
    location: "San Francisco, US",
    logo: require("../assets/images/uber.png"),
  },
];

const Header = ({ name, email }) => (
  <View style={styles.headerContainer}>
    <View>
      <Text style={styles.userNameText}>{name}</Text>
      <Text style={styles.userEmailText}>{email}</Text>
    </View>
    <Image
      style={styles.ellipseIcon}
      source={require("../assets/Ellipse.png")}
    />
    <View style={styles.ovalContainer}>
      <View style={styles.oval}></View>
    </View>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchBarContainer}>
    <View style={styles.searchInputContainer}>
      <Image
        style={styles.searchIcon}
        source={require("../assets/search.png")}
      />
      <TextInput style={styles.inputField} placeholder="Search" />
    </View>
    <View style={styles.filterIconContainer}>
      <Image
        style={styles.filterIcon}
        source={require("../assets/filter.png")}
      />
    </View>
  </View>
);

const FeaturedJobSection = () => (
  <View style={styles.featuredSectionContainer}>
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <Text style={styles.seeAllLink}>See all</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {featuredJobs.map((item) => (
        <View
          key={item.id}
          style={[styles.jobCard, { backgroundColor: item.backgroundColor }]}
        >
          <View style={styles.jobInfoRow}>
            <View style={styles.companyLogoContainer}>
              <Image style={styles.companyLogo} source={item.logo} />
            </View>
            <View style={styles.jobDetailsContainer}>
              <Text style={styles.jobTitleText}>{item.title}</Text>
              <Text style={styles.companyNameText}>{item.company}</Text>
            </View>
          </View>
          <View style={styles.jobInfoRow}>
            <Text style={styles.salaryText}>{item.salary}</Text>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const PopularJobSection = () => (
  <View style={styles.popularSectionContainer}>
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <Text style={styles.seeAllLink}>See all</Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {popularJobs.map((item) => (
        <View key={item.id} style={styles.popularJobCard}>
          <View style={styles.popularJobInfoRow}>
            <Image style={styles.popularCompanyLogo} source={item.logo} />
            <View style={styles.popularJobDetailsContainer}>
              <Text style={styles.popularJobTitleText}>{item.title}</Text>
              <Text style={styles.popularCompanyNameText}>{item.company}</Text>
            </View>
          </View>
          <View style={styles.popularJobInfoTwo}>
            <Text style={styles.popularJobSalaryText}>{item.salary}</Text>
            <Text style={styles.popularJobLocationText}>{item.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const Home = () => {
  const route = useRoute();
  const { name, email } = route.params || {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header name={name} email={email} />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedJobSection />
        <PopularJobSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FCFCFF",
    padding: 20,
  },
  headerContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ellipseIcon: {
    width: 50,
    height: 50,
  },
  ovalContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 15,
    height: 15,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  oval: {
    backgroundColor: "red",
    borderRadius: 100,
    width: 10,
    height: 10,
  },
  userNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userEmailText: {
    fontSize: 16,
    color: "#666",
  },
  searchBarContainer: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  inputField: {
    marginLeft: 10,
    fontSize: 18,
  },
  filterIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    marginLeft: 10,
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    padding: 6,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  featuredSectionContainer: {
    marginTop: 25,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllLink: {
    fontSize: 14,
    color: "#E79292",
  },
  jobCard: {
    marginRight: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    width: 280,
    height: 186,
    borderRadius: 25,
    padding: 18,
    marginBottom: 10,
  },
  companyLogoContainer: {
    backgroundColor: "#F9FBFF",
    borderRadius: 10,
    padding: 10,
    width: 50,
  },
  companyLogo: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  jobInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobDetailsContainer: {
    marginLeft: 20,
  },
  jobTitleText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
  },
  companyNameText: {
    fontSize: 14,
    color: "#F9FBFFB8",
  },
  salaryText: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  locationText: {
    fontSize: 15,
    color: "#FFF",
  },
  popularSectionContainer: {
    marginTop: 25,
  },
  popularJobCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  popularJobInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularJobDetailsContainer: {
    marginLeft: 8,
  },
  popularJobTitleText: {
    flexWrap: "wrap",
    width: 120,
    fontSize: 16,
    fontWeight: "bold",
  },
  popularCompanyLogo: {
    width: 40,
    height: 40,
  },
  popularCompanyNameText: {
    flexWrap: "wrap",
    fontSize: 14,
    color: "#0000006D",
  },
  popularJobLocationText: {
    fontSize: 14,
    color: "#0000006D",
  },
  popularJobSalaryText: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
  },
  popularJobInfoTwo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default Home;
