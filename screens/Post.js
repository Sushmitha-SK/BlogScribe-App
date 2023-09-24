import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import FooterMenu from './../components/Forms/Menus/FooterMenu';
import { PostContext } from "../context/postContext";

const Post = ({ navigation }) => {
    // global state
    const [posts, setPosts] = useContext(PostContext);

    // local state
    const [title, setTitle] = useState("");
    const [description, setDecription] = useState("");
    const [loading, setLoading] = useState(false);

    //Create post
    const handlePost = async () => {
        try {
            setLoading(true);
            if (!title) {
                alert("Please add post title ");
            }
            if (!description) {
                alert("Please add post  description");
            }
            const { data } = await axios.post("/post/create-post", {
                title,
                description,
            });
            setLoading(false);
            setPosts([...posts, data?.post]);
            alert(data?.message);
            navigation.navigate("Home");
        } catch (error) {
            alert(error.response.data.message || error.message);
            setLoading(false);
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.heading}>Create a post</Text>
                    <TextInput
                        style={[styles.inputBox, { height: 54 }]}
                        placeholder="Add post title"
                        placeholderTextColor={"gray"}
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add post description"
                        placeholderTextColor={"gray"}
                        multiline={true}
                        numberOfLines={6}
                        value={description}
                        onChangeText={(text) => setDecription(text)}
                    />
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
                        <Text style={styles.postBtnText}>
                            <FontAwesome5 name="plus-square" size={18} /> {"  "}
                            CREATE POST
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: '#E7F0FE' }}>
                <FooterMenu />
            </View>
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 40,
    },
    heading: {
        fontSize: 20,
        fontWeight: 500,
        textTransform: "uppercase",
    },
    inputBox: {
        backgroundColor: "#ffffff",
        textAlignVertical: "top",
        paddingTop: 10,
        width: 320,
        marginTop: 30,
        fontSize: 16,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: "#d6d6cd",
        borderRadius: 10,
    },
    postBtn: {
        backgroundColor: "#005FEE",
        width: 300,
        marginTop: 30,
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    postBtnText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: 500,
    },
});