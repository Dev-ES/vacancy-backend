
interface Persistent {
  save(): Promise<boolean>;
}

export default Persistent;
