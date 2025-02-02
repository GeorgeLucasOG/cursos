import { GraduationCap, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const {auth, resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-4 " />
          <span className="font-extrabold md:text-xl text-[14px]">
            Centro Profissional Excel
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[14px] md:text-[17px] font-medium"
          >
            Cursos
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/loja")
                ? null
                : navigate("/loja");
            }}
            className="text-[14px] md:text-[17px] font-medium"
          >
            Loja
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/suporte")
                ? null
                : navigate("/suporte");
            }}
            className="text-[14px] md:text-[17px] font-medium"
          >
            Suporte
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/empregos")
                ? null
                : navigate("/suporte");
            }}
            className="text-[14px] md:text-[17px] font-medium"
          >
            Empregos
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
      {auth?.authenticate ?
        (  
        <div className="flex gap-4 items-center">
          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-3"
          >
            <span className="font-extrabold md:text-xl text-[14px]">
              Meus Cursos
            </span>
            <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
          </div>
          <Button onClick={handleLogout}>Sair</Button>
        </div>
        ) : (
          <Button 
            variant="default"
            onClick={() => navigate("/auth")}
            className="text-[14px] md:text-[17px] font-medium"
          >
            Entrar
          </Button>
            )
      }        
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;
