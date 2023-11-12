import Journal from "../mongoose/models/Journal";

const getJournal = async (uid: string, id: string) => {
  const journal = await Journal.findOne({ id, uid });

  return journal;
};

export { getJournal };
