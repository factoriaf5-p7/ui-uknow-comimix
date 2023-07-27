export default interface CourseData {
    _id: string;
    name: string;
    price: number;
    topic: string;
    difficulty: string;
    tags: string[];
    bought: boolean;
    content: string;
    create_date: string;
    update_date: string;
    description: string;
    image: string;
    average: number;
  }