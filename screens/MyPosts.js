import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FooterMenu from './../components/Forms/Menus/FooterMenu';
import PostCard from './../components/PostCard';

const MyPosts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    //Get user post
    const getUserPosts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/post/get-user-post");
            setLoading(false);
            setPosts(data?.userPosts);
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert(error);
        }
    };

    //Initial
    useEffect(() => {
        getUserPosts();
    }, []);

    return (
        <View style={styles.container}>
            <Text>My Posts</Text>
            <ScrollView>
                {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
                <PostCard posts={posts}
                    myPostScreen={true}
                />
            </ScrollView>
            <View style={{ backgroundColor: '#E7F0FE' }}>
                <FooterMenu />
            </View>
        </View>

    )
}

export default MyPosts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: "space-between",
    },
});