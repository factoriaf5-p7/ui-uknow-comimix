import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface PurchaseResponse {
    message: string;
    course: courseData;
}

export const usePurchaseCourseMutation = () => {
    const navigate = useNavigate();

    const purchaseCourse = async (variables: { courseId: string; userId: string }): Promise<PurchaseResponse> => {
        const response = await fetch(`http://localhost:3000/courses/purchase`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
        });
    
        const data = await response.json();
        return data;
    };
    
    const queryClient = useQueryClient();
    
    const mutation = useMutation(purchaseCourse, {
        onSuccess: (data) => {
        console.log("Datos de compra:", JSON.stringify(data, null, 2));
        navigate('/course');
        queryClient.invalidateQueries(["users", "courses"]);
        },
        onError: (error: any) => {
        console.error('Failed to purchase course:', error);
        },
    });
    
    return mutation;
};
