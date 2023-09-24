import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import FooterMenu from './../components/Forms/Menus/FooterMenu';
import { PostContext } from "../context/postContext";
import PostCard from '../components/PostCard';

const Home = () => {
    //Global state
    const [posts, getAllPosts] = useContext(PostContext);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getAllPosts;
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <PostCard posts={posts} />
            </ScrollView>
            <View style={{ backgroundColor: '#E7F0FE' }}>
                <FooterMenu />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: "space-between",

    },
});

