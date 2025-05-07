import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../../conf/conf";


class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.APPWRITE_URL)
            .setProject(conf.APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, featuredImage, status, content, userId }) {
        try {
            return await this.databases.createDocument(conf.APPWRITE_DATABASE_ID, conf.APPWRITE_COLLECTION_ID, slug, {
                title,
                content,
                featuredImage,
                status,
                userId
            });
        } catch (error) {
            throw new Error("create new blog :: ", error);
        }
    }

    async updatePost(updates, slug) {
        try {
            return await this.databases.updateDocument(conf.APPWRITE_DATABASE_ID, conf.APPWRITE_COLLECTION_ID, slug, {
                ...updates
            });
        } catch (error) {
            throw new Error("create new blog :: ", error);
        }
    }

    async getAllPost(queries = [Query.equal('status', 'active')]) {
        try {
            const result = await this.databases.listDocuments(conf.APPWRITE_DATABASE_ID, conf.APPWRITE_COLLECTION_ID, queries);
            console.log(result);
            return result;
        } catch (error) {
            throw new Error("create new blog :: ", error);
        }
    }

    async getPost({ slug }) {
        try {
            const result = await this.databases.getDocument(conf.APPWRITE_DATABASE_ID, conf.APPWRITE_COLLECTION_ID, slug);
            console.log(result);
            return result;
        } catch (error) {
            throw new Error("create new blog :: ", error);
        }
    }

    async deletePost() {
        try {
            return await this.databases.deleteDocument(conf.APPWRITE_DATABASE_ID, conf.APPWRITE_COLLECTION_ID, slug);
        } catch (error) {
            throw new Error("create new blog :: ", error);
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.APPWRITE_BUCKET_ID, ID.unique(), file);
        } catch (error) {
            throw new Error("Appwrite service::", "uploadFile::", error);
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.APPWRITE_BUCKET_ID, // bucketId
            fileId, // fileId
            0, // width (optional)
            0, // height (optional)
            ImageGravity.Center, // gravity (optional)
            0, // quality (optional)
            0, // borderWidth (optional)
            '', // borderColor (optional)
            0, // borderRadius (optional)
            0, // opacity (optional)
            -360, // rotation (optional)
            '', // background (optional)
            ImageFormat.Jpg // output (optional)
        )
    }

    async deleteFile(fileId) {
        try {
            return this.bucket.deleteFile(conf.APPWRITE_BUCKET_ID, fileId);
        } catch (error) {
            throw new Error("Appwrite service::", "deleteFile::", error);
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;