import ButtonRM from "@components/common/ButtonReadMore";
import { useWeb3 } from "@context/Web3Provider";

const BlogPage = () => {
  const { isSignedIn, wallet } = useWeb3();
  return (
    <section>
      {isSignedIn ? (
        <ButtonRM />
      ) : (
        <div>
          <button
            className="font-extrabold px-4 py-2 bg-white backdrop-blur-lg bg-opacity-60 rounded-md z-10 text-primary-black hover:bg-opacity-60 hover:text-pome-dark"
            onClick={() => wallet.signIn()}
          >
            Connect To Read More
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
