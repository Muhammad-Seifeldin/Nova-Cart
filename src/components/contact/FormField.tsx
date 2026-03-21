import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	id: string;
}

interface TextareaFieldProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	error?: string;
	id: string;
}

interface SelectFieldProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	error?: string;
	id: string;
	options: { value: string; label: string }[];
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
	({ label, error, id, className, ...props }, ref) => {
		return (
			<div className="flex flex-col gap-2">
				<label
					htmlFor={id}
					className="text-sm font-medium text-[#1A1A1A] dark:text-[#F3F4F6] cursor-pointer"
				>
					{label}
				</label>
				<input
					id={id}
					ref={ref}
					className={cn(
						"bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-lg px-3 py-2 text-sm text-[#1A1A1A] dark:text-[#F3F4F6] placeholder:text-[#6B7280] dark:placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5B6CFF] transition-shadow",
						error &&
							"border-[#EF4444] dark:border-[#F87171] focus:ring-[#EF4444]",
						className,
					)}
					{...props}
				/>
				{error && (
					<span className="text-xs text-[#EF4444] dark:text-[#F87171]">
						{error}
					</span>
				)}
			</div>
		);
	},
);

FormField.displayName = "FormField";

export const TextareaField = forwardRef;
HTMLTextAreaElement,
	TextareaFieldProps >
		(({ label, error, id, className, ...props }, ref) => {
			return (
				<div className="flex flex-col gap-2">
					<label
						htmlFor={id}
						className="text-sm font-medium text-[#1A1A1A] dark:text-[#F3F4F6] cursor-pointer"
					>
						{label}
					</label>
					<textarea
						id={id}
						ref={ref}
						className={cn(
							"bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-lg px-3 py-2 text-sm text-[#1A1A1A] dark:text-[#F3F4F6] placeholder:text-[#6B7280] dark:placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5B6CFF] transition-shadow resize-none",
							error &&
								"border-[#EF4444] dark:border-[#F87171] focus:ring-[#EF4444]",
							className,
						)}
						{...props}
					/>
					{error && (
						<span className="text-xs text-[#EF4444] dark:text-[#F87171]">
							{error}
						</span>
					)}
				</div>
			);
		});

TextareaField.displayName = "TextareaField";

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
	({ label, error, id, options, className, ...props }, ref) => {
		return (
			<div className="flex flex-col gap-2">
				<label
					htmlFor={id}
					className="text-sm font-medium text-[#1A1A1A] dark:text-[#F3F4F6] cursor-pointer"
				>
					{label}
				</label>
				<select
					id={id}
					ref={ref}
					className={cn(
						"bg-[#F8F9FB] dark:bg-[#171923] border border-[#E6E8EC] dark:border-[#2A2F3A] rounded-lg px-3 py-2 text-sm text-[#1A1A1A] dark:text-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#5B6CFF] transition-shadow",
						error &&
							"border-[#EF4444] dark:border-[#F87171] focus:ring-[#EF4444]",
						className,
					)}
					{...props}
				>
					<option value="">Select an option</option>
					{options.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}
				</select>
				{error && (
					<span className="text-xs text-[#EF4444] dark:text-[#F87171]">
						{error}
					</span>
				)}
			</div>
		);
	},
);

SelectField.displayName = "SelectField";
