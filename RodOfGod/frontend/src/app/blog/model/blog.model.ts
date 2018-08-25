export class Blog {
    blogId: number;
    blogPost: string;
    blogTypeId: number;
    createDate: Date;
}

export interface IGetBlogsResponse{
    blogs: Blog[]
}