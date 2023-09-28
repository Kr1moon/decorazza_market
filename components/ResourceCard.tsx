import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
  

interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink } : Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link 
      href={downloadLink}
      target="_blank"
      > 
       <CardHeader className="flex-center flex-col gap-2.5 !p-0">
        <div> 
          <Image
          src={image}
          alt={title}
          width={384}
          height={440}
          className="h-full rounded-md object-cover"
          />
        </div>
    <CardTitle className="text-white paragraph-semibold link-clamp-1 w-full rext-left">{title}</CardTitle>
   
  </CardHeader>
      </Link> 
  <CardContent className="flex-betwwen mt-4 p-0">
    <div className="flex-center body-medium gap-1.5 text-white"> 
    <Image 
    src='/public/downloads.svg'
    alt='downlods'
    width={20}
    height={20}
    className="h-full rounded-md object-cover"
    />
      {downloadNumber}
      </div>
  <Link href={downloadLink} 
  target="_blank"
  className="flex-center text-gradient_purple-blue body-semibold gap-1.5"> 
  Download Now
  <Image 
  src='/arrow-blue.svg'
  width={13} 
  height={10} 
  alt='arrow'
  />
  </Link>    
  </CardContent>
  
</Card>

  )
}

export default ResourceCard