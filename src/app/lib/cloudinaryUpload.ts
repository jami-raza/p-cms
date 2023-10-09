export async function upload(file:File):Promise<any>{

    const formDataV = new FormData()
    formDataV.append('upload_preset', 'portfolio');
    formDataV.append('file', file);

    const data = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formDataV
    }).then(r => r.json()).catch(e => e)

    return data;
}