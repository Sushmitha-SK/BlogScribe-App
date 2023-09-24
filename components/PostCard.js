import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import EditModal from './EditModal';

const PostCard = ({ posts, myPostScreen }) => {
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [post, setPost] = useState({});
    const navigation = useNavigation();

    //handle delete prompt
    const handleDeletePropmt = (id) => {
        Alert.alert("Attention!", "Are you sure want to delete this post?", [
            {
                text: "Cancel",
                onPress: () => {
                    console.log("cancel press");
                },
            },
            {
                text: "Delete",
                onPress: () => handleDeletePost(id),
            },
        ]);
    };

    //Delete Post
    const handleDeletePost = async (id) => {
        try {
            setLoading(true);
            const { data } = await axios.delete(`/post/delete-post/${id}`);
            setLoading(false);
            alert(data?.message);
            navigation.push("MyPosts");
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert(error);
        }
    };


    return (
        <View>
            {/* <Text style={styles.heading}>Total Posts {posts?.length}</Text> */}
            {myPostScreen && (
                <EditModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    post={post}
                />
            )}
            {posts?.map((post, i) => (
                <>
                    <View style={styles.card} key={i}>
                        {myPostScreen && (
                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <Text style={{ marginHorizontal: 20 }}>
                                    <FontAwesome5
                                        name="pen"
                                        size={16}
                                        color={"darkblue"}
                                        onPress={() => {
                                            setPost(post), setModalVisible(true);
                                        }}
                                    />
                                </Text>

                                <Text>
                                    <FontAwesome5
                                        name="trash"
                                        size={16}
                                        color={"red"}
                                        onPress={() => handleDeletePropmt(post?._id)}
                                    />
                                </Text>
                            </View>
                        )}
                        <Text style={styles.title}>Title: {post?.title}</Text>
                        <Text style={styles.desc}>{post?.description}</Text>

                        <View style={styles.footer}>
                            {post?.postedBy?.name && (
                                <Text>
                                    {" "}
                                    <FontAwesome5 name="user" color={"#005FEE"} />{" "}
                                    {post?.postedBy?.name}
                                </Text>
                            )}

                            <Text>
                                {" "}
                                <FontAwesome5 name="clock" color={"#005FEE"} />{" "}
                                {moment(post?.createdAt).format("DD/MM/YYYY")}
                            </Text>
                        </View>
                    </View>
                </>
            ))}
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    heading: {
        color: "green",
        textAlign: "center",
    },
    card: {
        width: "97%",
        backgroundColor: "#ffffff",
        borderWidth: 0.2,
        borderColor: "#eeeee4",
        padding: 20,
        borderRadius: 5,
        marginVertical: 10,
        borderRadius: 5
    },
    title: {
        fontWeight: 500,
        fontSize: '16px',
        paddingBottom: 10,
        borderBottomWidth: 0.3,

    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    desc: {
        marginTop: 10,
        fontSize: '14px',
        fontWeight: 500
    },
});