import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCopy } from "react-icons/bi";

const CodeBlock = ({
  response,
  language,
  header,
}: {
  response: string;
  language: string;
  header: string;
}) => {
  const code = response.split("\n").splice(1).join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast("Code Copied", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="w-1/2">
        <div className="relative top-2 bg-[#0c232f] text-white font-light text-base rounded-t-xl py-3 px-5 flex items-center justify-between shadow-lg">
          <h1>{header}</h1>
          <div
            onClick={handleCopy}
            className="text-sm flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-slate-800"
          >
            <BiCopy />
            Copy code
          </div>
        </div>
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          className="rounded-b-xl border-[2px] border-[#0c232f] shadow-xl"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeBlock;
