// login into cloudinary and write your own preset name,cloud name and api_url
const upload_preset ="Write_your_own"
const cloud_name="Write_your_own"
const api_url = `Wrtie_your_own`

export const uploadImageToCloudinary = async(file) => {
    const data=new FormData();
    data.append("file",file);
    data.append("upload_preset",upload_preset);
    data.append("cloud_name",cloud_name);

    const res =await fetch(api_url,{
        method:"post",
        body:data
    });

    const fileData = await res.json();
    console.log(fileData)
    return fileData.url
}
