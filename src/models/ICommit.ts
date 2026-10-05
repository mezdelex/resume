export default interface ICommit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
}
