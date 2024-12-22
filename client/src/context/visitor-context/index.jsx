import { createContext, useState } from "react";

export const VisitorContext = createContext(null);

export default function VisitorProvider({ children }) {
  const [visitorViewCoursesList, setVisitorViewCoursesList] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [visitorViewCourseDetails, setVisitorViewCourseDetails] =
    useState(null);
  const [currentCourseDetailsId, setCurrentCourseDetailsId] = useState(null);
  
    useState({});

  return (
    <VisitorContext.Provider
      value={{
        visitorViewCoursesList,
        setVisitorViewCoursesList,
        loadingState,
        setLoadingState,
        visitorViewCourseDetails,
        setVisitorViewCourseDetails,
        currentCourseDetailsId,
        setCurrentCourseDetailsId,
      }}
    >
      {children}
    </VisitorContext.Provider>
  );
}
