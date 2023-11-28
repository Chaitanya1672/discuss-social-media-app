import { db } from "@/db";
import paths from "@/path";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany()
  
  const renderedTopics = topics.map((topic)=>{
    return (
      <li key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </li>
    )
  })
  
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {renderedTopics}
    </ul>
  )
}