import {DAILY_INCOME , FETCH_POST , UPDATE_POST ,FETCH_JOBS,FETCH_ABOUT,FETCH_REMOTE, DELETE_POST} from './type'
import firebase from 'firebase/app' 

import {db} from '../firebase'
const blogs = db.collection("blogs");
const jobs = db.collection("jobs");
const about = db.collection("about");
const service = db.collection("service");
const remoteHiring = db.collection("remoteHiring");
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
export const addNewJob = (blog) => async (dispatch) => {
	console.log(blog)
	let customkey = firebase.firestore().collection("blogs").doc();
  // GET NAME FROM THE FILE

  // 
  var filename =blog.jobImage.name;
  console.log(filename);
  // GET EXTENSION OF THE IMAGE
  let ext2 = filename.slice(filename.lastIndexOf("."));

  var image_name= customkey.id + ext2.toLowerCase();
  console.log(image_name);
  // UPLOAD IT ON FIREBASE STORAGE
  var storageRef= await firebase
    .storage()
    .ref("jobImages/" + customkey.id + ext2.toLowerCase())
    .put(blog.jobImage)
 


console.log("names",image_name)
  
   
  // GET URL
  // 

 
 var url= await storageRef.ref.getDownloadURL()
 console.log(url);

 const obj={
	 job_description:blog.jobDescription,
	 job_jobPrice:blog.jobPrice,
   requirements:blog.requirements,
   experience:blog.experience,
	 job_title:blog.jobTitle,
	 job_image:url,
   city:blog.city,
   offer:blog.offer,
	 image_name:image_name

 }
   

   
  
  // VIEW THAT URL
 
	try {
		jobs.add(obj).then(() => {
            
                
				alert('job added successfully')
				
        
      
        });
	} catch (error) {
		console.log(error.message)
	}
    
      
   
}
export const addNewHiring = (blog) => async (dispatch) => {
	console.log(blog)
	

 const obj={
	 video_link:blog.link,
   how_hire:blog.hire

 }
   

   
  
  // VIEW THAT URL
 
	try {
		remoteHiring.add(obj).then(() => {
            
                
				alert('Hiring added successfully')
				
        
      
        });
	} catch (error) {
		console.log(error.message)
	}
    
      
   
}
export const addNewService = (blog) => async (dispatch) => {
	console.log(blog)
	

 const obj={
	 service:blog.service,


 }
   

   
  
  // VIEW THAT URL
 
	try {
		service.add(obj).then(() => {
            
                
				alert('service added successfully')
				
        
      
        });
	} catch (error) {
		console.log(error.message)
	}
    
      
   
}

export const addNewAbout = (blog) => async (dispatch) => {
	console.log(blog)
	let customkey = firebase.firestore().collection("blogs").doc();
  // GET NAME FROM THE FILE

  // 
  var filename =blog.clients_File.name;
  console.log(filename);
  // GET EXTENSION OF THE IMAGE
  let ext2 = filename.slice(filename.lastIndexOf("."));

  var image_name= customkey.id + ext2.toLowerCase();
  console.log(image_name);
  // UPLOAD IT ON FIREBASE STORAGE
  var storageRef= await firebase
    .storage()
    .ref("jobImages/" + customkey.id + ext2.toLowerCase())
    .put(blog.clients_File)
 


console.log("names",image_name)
  
   
  // GET URL
  // 

 
 var url= await storageRef.ref.getDownloadURL()
 console.log(url);

 const obj={
	values:blog.value,
  clients_img:url,
  image_name:image_name,
  about:blog.about,
  mission:blog.mission

 }
   

   
  
  // VIEW THAT URL
 
	try {
		about.add(obj).then(() => {
            
                
				alert('job added successfully')
				
        
      
        });
	} catch (error) {
		console.log(error.message)
	}
    
      
   
}
export const fetchPosts=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		blogs.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_POST,
                payload: data,
            });
        });
    // };
}  

export const fetchJobs=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		jobs.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_JOBS,
                payload: data,
            });
        });
    // };
}
export const fetchRemoteHiring=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		remoteHiring.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_REMOTE,
                payload: data,
            });
        });
    // };
}
export const fetchAbout=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		about.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_ABOUT,
                payload: data,
            });
        });
    // };
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

