type Props = {
  isLiked: boolean;
};
export const LikeIcon = ({ isLiked }: Props) =>
  isLiked ? (
    <img
      className="cursor-pointer"
      src="filled-likes-icon.svg"
      alt="likes icon filled"
      data-test="dislike"
    />
  ) : (
    <img
      className="cursor-pointer"
      src="likes-icon.svg"
      alt="likes icon"
      data-test="like"
    />
  );
