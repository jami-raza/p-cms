import { upload } from "@/app/lib/cloudinaryUpload";
import { supabase } from "@/app/lib/supabaseInitialize";
import { NextResponse } from "next/server";

export async function PUT(request: Request,
{ params }: { params: { id: string } }
  
  ) {
    try {
      console.log(params, "PARAMS")
        const json = await request.formData()
        
        console.log(json, "REquest")
    

   
        const gallery = json.get('gallery')
        const image = json.get('image')
        const name = json.get('title')
        const subtitle = json.get('subtitle')
        const category = json.get('category')
        const description = json.get('description')
        const tags = json.get('tags')

        const tagsDestruct = (tags as string)?.split(',')

    console.log(gallery, "Gallery")
        
    const imageUpload = await upload(image as any)
    if(imageUpload['error']){
        return new NextResponse(JSON.stringify(imageUpload['error']), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
    }
    console.log(imageUpload.secure_url, "Imae Upload")
        const galleryJson:string[] = []
    // for ( const file of gallery ) {
    //     const fileUpload = await upload(file as any)
    //     console.log(fileUpload, "File Upload")
    //     if(fileUpload['error']){
    //         return new NextResponse(JSON.stringify(fileUpload['error']), {
    //             status: 500,
    //             headers: { "Content-Type": "application/json" },
    //           });
    //     }
    //     galleryJson.push(fileUpload.secure_url)


    // }

    console.log(galleryJson, "Gallery Json")

    
    const { data, error } = await supabase.from('portfolio')
          .insert([
            {
              name: name,
              subtitle: subtitle,
              description: description,
              category: category,
              tags: JSON.stringify(tagsDestruct),
              image: imageUpload.secure_url,
              gallery: gallery
            },
  
          ])
          .select()

          console.log(data, "DATA Supa base")
          console.log(error, "Error Supa base")
          if(error){
            return new NextResponse(JSON.stringify(error), {
                status: 500,
                headers: { "Content-Type": "application/json" },
              });
          }
      let json_response = {
        status: "success",
        data: data
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {

      // if (error.code === "P2002") {
      //   let error_response = {
      //     status: "fail",
      //     message: "Feedback with title already exists",
      //   };
      //   return new NextResponse(JSON.stringify(error_response), {
      //     status: 409,
      //     headers: { "Content-Type": "application/json" },
      //   });
      // }
  
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

  export async function GET(request: Request, 
{ params }: { params: { id: string } }
    
    ) {

        console.log(params, "PARAMS")
    const { data, error } = await supabase.from('portfolio')
    .select().eq(`id`,params.id)

    console.log(data, "DATA Supa base")
    console.log(error, "Error Supa base")
    if(error){
      return new NextResponse(JSON.stringify(error), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
    }
let json_response = {
  status: "success",
  data: data
};
return new NextResponse(JSON.stringify(json_response), {
  status: 201,
  headers: { "Content-Type": "application/json" },
});
}

export async function DELETE(request: Request, 
  { params }: { params: { id: string } }
      
      ) {
  
          console.log(params, "PARAMS")
      const { data, error } = await supabase.from('portfolio')
      .delete().eq(`id`,params.id)
  
      console.log(data, "DATA Supa base")
      console.log(error, "Error Supa base")
      if(error){
        return new NextResponse(JSON.stringify(error), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
      }
  let json_response = {
    status: "success",
    data: data
  };
  return new NextResponse(JSON.stringify(json_response), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
  }

