import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SettingElement from "../components/SettingElement";
import StatusBar from "../components/StatusBar";

class SettingScreen extends React.Component {
    onPressUpdateProfile() {
        console.log("SettingScreen.onPressUpdateProfile");
    }

    onPressLogOut() {
        console.log("SettingScreen.onPressLogOut");
    }

    onPressDeleteAccount() {
        console.log("SettingScreen.onPressDeleteAccount");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Setting</Text>

                <View style={styles.profileContainer}>
                    <Text><Text>유천</Text>님</Text>
                    <TouchableOpacity onPress={this.onPressUpdateProfile.bind(this)}><Text>수정</Text></TouchableOpacity>
                </View>

                <View style={styles.profileContainer}>
                    <Text>아이콘</Text>
                    <Text>yucheon6000@gmail.com</Text>
                </View>

                <SettingElement title="로그아웃" onPress={this.onPressLogOut.bind(this)} />
                <SettingElement title="계정삭제" onPress={this.onPressDeleteAccount.bind(this)} />

                <View style={styles.secantLine}></View>

                <SettingElement title="개인정보처리방침" />
                <SettingElement title="서비스 이용약관" />
                <SettingElement title="문의하기" />

                <StatusBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    profileContainer: {
        flexDirection: "row"
    },
    secantLine: {
        width: "100%",
        height: 1,
        marginVertical: 10,
        backgroundColor: "grey"
    }
});

export default SettingScreen;