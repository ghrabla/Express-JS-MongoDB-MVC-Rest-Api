
import { useSelector } from 'react-redux'

const Profile = () =>{

    const {admin} = useSelector((state) => state.authAdmin);

    return(
        <div >
        <div class="flex justify-between lg:flex-row flex-col-reverse items-center mt-10 mx-10">
            <div class="mt-2">
                <div class="border rounded overflow-hidden flex lg:mx-0 mx-10">
                 <input type="text" class="px-4 py-2 w-96" placeholder="search..."/>
                 <button class="flex items-center justify-center px-4 border-l bg-white">
                 <svg class="h-4 w-4 text-grey-dark " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </button>
            </div>
            </div>
            <div class="flex">
            <div class="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
              <img src="http://source.unsplash.com/100x100/?man" class="rounded-3xl"/>
              <div class="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="mt-4 font-bold">
                {admin && admin.fullname}
               
            </div>
            </div>
              
        </div>
    </div>
    )
}

export default Profile;