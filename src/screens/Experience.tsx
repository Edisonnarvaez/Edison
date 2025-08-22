import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaBuilding, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import '/src/i18n.ts';

const experienceData = [
	{
		titleKey: 'experience1t',
		descKey: 'experience1',
		dateKey: 'experience1d',
		company: 'RED Medicron IPS',
		icon: FaBriefcase,
		gradient: 'from-electric-violet-400 to-electric-violet-600',
	},
	{
		titleKey: 'experience2t',
		descKey: 'experience2',
		dateKey: 'experience2d',
		company: 'RED Medicron IPS',
		icon: FaBuilding,
		gradient: 'from-blue-400 to-blue-600',
	},
	{
		titleKey: 'experience3t',
		descKey: 'experience3',
		dateKey: 'experience3d',
		company: 'RED Medicron IPS',
		icon: FaCalendarAlt,
		gradient: 'from-green-400 to-green-600',
	},
];

const Experience = () => {
	const { t } = useTranslation();
	const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

	// Llamar los hooks en el nivel superior del componente
	const exp1Animation = useScrollAnimation();
	const exp2Animation = useScrollAnimation();
	const exp3Animation = useScrollAnimation();

	// Array con las animaciones
	const experienceAnimations = [exp1Animation, exp2Animation, exp3Animation];

	return (
		<section className="flex flex-col w-full min-h-[600px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-10 p-8 rounded-3xl shadow-xl overflow-hidden">
			<h1
				ref={titleRef}
				className={`text-4xl md:text-6xl font-bold text-electric-violet-400 mb-8 text-center transition-all duration-700 ${
					titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
				}`}
			>
				{t('experience0')}
			</h1>

			<section className="relative">
				{/* Timeline line */}
				<div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-violet-400 to-transparent"></div>

				<section className="flex flex-col gap-8">
					{experienceData.map((exp, index) => {
						const { ref, isVisible } = experienceAnimations[index];
						const IconComponent = exp.icon;

						return (
							<section
								key={index}
								ref={ref}
								className={`relative transition-all duration-700 ${
									isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'
								}`}
								style={{ animationDelay: `${index * 200}ms` }}
							>
								{/* Timeline dot */}
								<div className="absolute left-2 md:left-6 w-4 h-4 bg-electric-violet-400 rounded-full border-4 border-bunker-950 z-10"></div>

								{/* Card */}
								<div className="ml-12 md:ml-20 group">
									<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white/15">
										<div className="flex items-start gap-4">
											<div
												className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} shadow-lg`}
											>
												<IconComponent className="text-white text-xl" />
											</div>

											<div className="flex-1">
												<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
													<h2 className="text-xl font-bold text-white group-hover:text-electric-violet-300 transition-colors">
														{exp.company}
													</h2>
													<span className="text-sm text-electric-violet-400 bg-electric-violet-400/20 px-3 py-1 rounded-full">
														{t(exp.dateKey)}
													</span>
												</div>

												<h3 className="text-lg text-electric-violet-300 mb-3 font-semibold">
													{t(exp.titleKey)}
												</h3>

												<p className="text-white/80 leading-relaxed">
													{t(exp.descKey)}
												</p>
											</div>
										</div>
									</div>
								</div>
							</section>
						);
					})}
				</section>
			</section>
		</section>
	);
};

export default Experience;
