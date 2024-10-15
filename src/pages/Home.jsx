// // import React, {useEffect, useState} from 'react'
// // import appwriteService from "../appwrite/config";
// // import {Container, PostCard} from '../components'

// // function Home() {
// //     const [posts, setPosts] = useState([])

// //     useEffect(() => {
// //         appwriteService.getPosts().then((posts) => {
// //             if (posts) {
// //                 setPosts(posts.documents)
// //             }
// //         })
// //     }, [])
  
// //     if (posts.length === 0) {
// //         return (
// //             <div className="w-full py-8 mt-4 text-center">
// //                 <Container>
// //                     <div className="flex flex-wrap">
// //                         <div className="p-2 w-full">
// //                             <h1 className="text-2xl font-bold hover:text-gray-500">
// //                                 Login to read posts
// //                             </h1>
// //                         </div>
// //                     </div>
// //                 </Container>
// //             </div>
// //         )
// //     }
// //     return (
// //         <div className='w-full py-8'>
// //             <Container>
// //                 <div className='flex flex-wrap'>
// //                     {posts.map((post) => (
// //                         <div key={post.$id} className='p-2 w-1/4'>
// //                             <PostCard {...post} />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </Container>
// //         </div>
// //     )
// // }

// // export default Home

// import React, { useEffect, useState } from 'react';
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from '../components';
// import { FaSpinner } from 'react-icons/fa';

// function Home() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents);
//             }
//             setLoading(false);
//         });
//     }, []);

//     if (loading) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex justify-center items-center">
//                         <FaSpinner className="animate-spin text-4xl text-gray-700" />
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap justify-center">
//                         <div className="p-2 w-full">
//                             <h1 className="text-4xl font-bold hover:text-gray-500 transition duration-300">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className='w-full py-8 bg-gray-50'>
//             <Container>
//                 <div className='flex flex-wrap -mx-4'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-4 w-full md:w-1/2 lg:w-1/4 transition-transform transform hover:scale-105'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { FaSpinner } from 'react-icons/fa';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const typedRef = useRef(null); // Ref for the Typed.js element

    useEffect(() => {
        // Only initialize Typed.js if typedRef is properly set
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: [
                    "Discover Amazing Content", 
                    "Read the Latest Articles", 
                    "Share Your Thoughts with the World"
                ],
                typeSpeed: 50,
                backSpeed: 40,
                loop: true
            });

            // Cleanup on component unmount
            return () => {
                typed.destroy();
            };
        }
    }, [typedRef]); // Make sure the effect runs when the ref is assigned

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex justify-center items-center">
                        <FaSpinner className="animate-spin text-4xl text-gray-700" />
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-gray-250">
            {/* Hero Section with Typed.js */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 text-center">
                <Container>
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog!</h1>
                    {/* Use ref for Typed.js */}
                    <span className="text-2xl font-medium" ref={typedRef}></span>
                </Container>
            </div>

            {/* Project Description Section */}
            <div className="py-12 bg-grey text-gray-700">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-semibold">What is this Blog?</h2>
                        <p className="text-lg mt-4 max-w-2xl mx-auto">
                            This is a blog website where users can discover amazing posts, share ideas, and read content . 
                            Users can log in to create, edit, and delete their own blog posts. Join the community and start contributing today!
                        </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-xl font-bold">Create Posts</h3>
                            <p className="mt-2">Users can create their own blog posts and share them with the community.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Edit Posts</h3>
                            <p className="mt-2">Easily edit and update your existing posts to keep them fresh and relevant.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Read & Explore</h3>
                            <p className="mt-2">Browse posts on various topics written by people from around the world.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Delete Posts</h3>
                            <p className="mt-2">You have control over your posts and can delete them at any time.</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Posts Section */}
            {/* <div className="py-12 bg-gray-100">
                <Container>
                    {posts.length === 0 ? (
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Login to read posts</h2>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <div key={post.$id} className="transition-transform transform hover:scale-105">
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
            </div> */}
        </div>
    );
}

export default Home;
