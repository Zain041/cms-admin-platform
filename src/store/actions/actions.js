import {DAILY_INCOME , FETCH_POST , UPDATE_POST , DELETE_POST} from './type'
import firebase from 'firebase/app' 

import {db} from '../firebase'
const blogs = db.collection("blogs");
export const addNewBlog = (blog) => async (dispatch) => {
	console.log(blog)
	let customkey = firebase.firestore().collection("blogs").doc();
  // GET NAME FROM THE FILE

  // 
  var filename =blog.blogImage.name;
  console.log(filename);
  // GET EXTENSION OF THE IMAGE
  let ext2 = filename.slice(filename.lastIndexOf("."));

  var image_name= customkey.id + ext2.toLowerCase();
  console.log(image_name);
  // UPLOAD IT ON FIREBASE STORAGE
  var storageRef= await firebase
    .storage()
    .ref("blogImages/" + customkey.id + ext2.toLowerCase())
    .put(blog.blogImage)
 


console.log("names",image_name)
  
   
  // GET URL
  // 

 
 var url= await storageRef.ref.getDownloadURL()
 console.log(url);

 const obj={
	 blog_text:blog.blogText,
	 blog_subtitle:blog.blogSubtitle,
	 blog_title:blog.blogTitle,
	 blog_image:url,
	 image_name:image_name

 }
   

   
  
  // VIEW THAT URL
 
	try {
		blogs.add(obj).then(() => {
            
                
				alert('blog added successfully')
				
        
      
        });
	} catch (error) {
		console.log(error.message)
	}
    
      
   
}
// export function deletePost(postId ,userid) {

	

// 	return function (dispatch) {
// 		posts
// 			.doc(postId)
// 			.delete()
// 			.then(() => {
// 				dispatch({
// 					type: DELETE_POST,
// 					payload: postId,
// 				});
			
// 			});
// 	};
// }
// export function editPost(postId, post) {
// 	return function (dispatch) {
// 		// console.log(postId);
// 		console.log(postId);
//              posts
// 			.doc(postId)
// 			.update(post)
// 			.then(() => {
// 				dispatch({
// 					type: UPDATE_POST,
// 					payload: post,
// 				});
		
// 			});
// 	};
// }

