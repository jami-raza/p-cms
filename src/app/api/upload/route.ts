import { upload } from "@/app/lib/cloudinaryUpload";
import { supabase } from "@/app/lib/supabaseInitialize";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const json = await request.formData()
        
        console.log(json, "REquest")
    

   
        const gallery = json.getAll('gallery')
        const galleryJson:string[] = []
        for ( const file of gallery ) {
            const fileUpload = await upload(file as any)
            console.log(fileUpload, "File Upload")
            if(fileUpload['error']){
                return new NextResponse(JSON.stringify(fileUpload['error']), {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                  });
            }
            galleryJson.push(fileUpload.secure_url)
    
    
        }

        return new NextResponse(JSON.stringify(galleryJson), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });

    }catch (error:any) {
        let error_response = {
            status: "error",
            message: error.message,
          };
          return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
    }
    

}