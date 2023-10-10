
type CloudinaryResourceImage = {
    asset_id: string,
    public_id: string,
    format: string,
    version: number,
    resource_type: string,
    type: string,
    created_at: string,
    bytes: number,
    width: number,
    height: number,
    folder: string,
    access_mode: string,
    url:string,
    secure_url: string
      
}

export type Resource = {
    resources: CloudinaryResourceImage[]
}
export async function cloudinaryImages() {

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ":" + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64'));
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`, {
        method: 'GET',
        headers: headers,
        next:{revalidate:100}
    })
    
   return res;
}