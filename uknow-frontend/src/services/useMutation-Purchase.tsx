import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAPIError } from "../hooks/useAPIError";


interface PurchaseResponse {
    message: string;
}

export const usePurchaseCourseMutation = () => {
    const navigate = useNavigate();
    const { addError } = useAPIError();

    const purchaseCourse = async (variables: { courseId: string; userId: string }): Promise<PurchaseResponse> => {
        const response = await fetch(`http://localhost:3000/courses/purchase`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Purchase failed");
          }
    
        const data = await response.json();
        return data;
    };
    
    const queryClient = useQueryClient();
    
    const mutation = useMutation(purchaseCourse, {
        onSuccess: (data) => {
            // queryClient.setQueryData(["users", "courses", "boughtCourses", "createdCourses"], data);
            // queryClient.invalidateQueries(["users", "courses"]);
            navigate('/course');        
        },
        onError: (error: any) => {
            addError(error.message || 'An error occurred', 500);
        },
    });
    
    return mutation;
};
