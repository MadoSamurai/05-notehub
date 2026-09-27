import css from './SearchBox.module.css';

interface SearchBaxProps {
  value: string;
  onChange: (value: string) => void;
}
export default function SearchBox({ value, onChange }: SearchBaxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
