import ResourceCard from "@/components/ResourceCard";
import Filter from "@/components/Filter";
import SearchForm from "@/components/SearchForm";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import React from "react";
import Header from "@/components/Header";
export const revalidate = 900;
interface Props {
  searchParams: { [key: string]: string | undefined}
}

const Page = async ({ searchParams } : Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: "1",
  });

  const resourcesPlaylist = await getResourcesPlaylist();

console.log(resourcesPlaylist);

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-center bg-cover text-center">
          <h1 className="sm:heading1 heading2 text-center text-white">
            Decorazza Market
          </h1>
        </div>
        <SearchForm />
      </section>
      
      <Filter />

      { 
        (searchParams?.query || searchParams?.category) && (
          <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        
       <Header 
       query={searchParams?.query || ''}
       category={searchParams?.category || ''}
       />
        <div className="mt-12 flex flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                id={resource.id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No resources found</p>
          )}
        </div>
      </section>
        )}   
        {
          resourcesPlaylist.map((item: any) => (
           <section 
           key={item.id} className="flex-center mt-6 w-full flex-col sm:mt-20">
            <h2 className="heading3 self-start text-white-800"> 
              {item.title}
            </h2>
            <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.resources.map((resource: any) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                id={resource.id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))}
            </div>
           </section> 
          ))
        }  
    </main>
  );
};

export default Page;
