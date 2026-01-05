import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const teamData = {
  psychologists: [
    {
      id: 1,
      name: "Shanugha P",
      title: "Consultant Psychologist",
      description: "Helps children manage emotions and behaviours through warm, structured therapy that supports both personal growth and family harmony.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=faces",
      credentials: "M.A in Psychology",
      age: "Age Groups: 5+ yrs",
      languages: "Languages: English, Malayalam, Hindi",
      about: "Shanugha provides compassionate psychological support, helping individuals navigate emotional and behavioral challenges with evidence-based therapeutic approaches.",
      areasOfFocus: [
        "Cognitive behavioral therapy",
        "Anxiety and stress management",
        "Emotional regulation",
        "Behavioral interventions",
        "Family counseling"
      ],
      approach: [
        "Empathetic and non-judgmental",
        "Evidence-based therapeutic techniques",
        "Holistic view of mental wellness"
      ]
    },
    {
      id: 2,
      name: "Veena P Chandran",
      title: "Developmental Therapist",
      description: "Guides early developmental growth through evidence-based intervention and parent-led strategies that build strong foundational skills.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=faces",
      credentials: "B.Sc in Psychology",
      age: "Age Groups: 0-6 yrs",
      languages: "Languages: English, Malayalam",
      about: "Veena is a compassionate developmental therapist dedicated to early intervention. She works with families to support young children's growth across communication, motor, and social-emotional domains.",
      areasOfFocus: [
        "Early intervention strategies",
        "Developmental milestone support",
        "Parent coaching and guidance",
        "Play-based learning approaches",
        "Social-emotional development"
      ],
      approach: [
        "Family-centered and collaborative",
        "Uses play-based methods for natural learning",
        "Focuses on celebrating small victories"
      ]
    },
    {
      id: 3,
      name: "Alant Cheria Varghese",
      title: "Occupational Therapist",
      description: "Supports children in improving daily functioning and sensory control through playful, child-centred occupational therapy routines.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=faces",
      credentials: "B.OT (Occupational Therapy)",
      age: "Age Groups: 2-18 yrs",
      languages: "Languages: English, Malayalam, Hindi",
      about: "Alant helps children develop the skills they need for daily activities, focusing on sensory processing, fine motor skills, and functional independence.",
      areasOfFocus: [
        "Sensory integration therapy",
        "Fine and gross motor skills",
        "Self-care and independence",
        "Handwriting and school readiness",
        "Adaptive strategies for daily living"
      ],
      approach: [
        "Individualized and goal-oriented",
        "Activity-based and engaging",
        "Collaborative with families and schools"
      ]
    },
    {
      id: 4,
      name: "Aneesha Peter",
      title: "Speech-Language Pathologist",
      description: "Aneesha focuses on building clarity and confidence through personalized speech therapy approaches tailored around each child's needs.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop&crop=faces",
      credentials: "M.Sc SLP (RCI Regd.)",
      age: "Age Groups: 3-16 yrs",
      languages: "Languages: English, Malayalam",
      about: "Aneesha is a dedicated Speech-Language Pathologist who supports children in building clearer communication, expressive skills, and confidence in daily interactions. With over six years of clinical experience, she helps children overcome speech sound difficulties, apraxia, clarity issues, and AAC-based communication barriers — always at a pace that feels safe, encouraging, and child-friendly.",
      areasOfFocus: [
        "Speech clarity improvement",
        "Apraxia intervention",
        "AAC systems support & training",
        "Parent-guided speech development",
        "Expressive language confidence building"
      ],
      approach: [
        "Structured, child-paced and evidence-based, focusing on comfort and emotional safety",
        "Encourages parent involvement for carry-over at home",
        "Keeps sessions playful and engaging to support natural confidence"
      ]
    }
  ]
};

const HomeTeamCard = ({ member, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-cream rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full"
  >
    <img 
      src={member.image} 
      alt={member.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="font-urbanist text-xl font-bold text-primary-color mb-1">{member.name}</h3>
      <p className="font-urbanist text-secondary-color font-bold text-base mb-3">{member.title}</p>
      <p className="font-urbanist italic text-primary-color text-sm leading-relaxed">{member.description}</p>
    </div>
  </div>
);

const TeamCard = ({ member, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
  >
    <img 
      src={member.image} 
      alt={member.name}
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="font-urbanist text-base font-bold text-primary-color mb-1">{member.name}</h3>
      <p className="font-urbanist text-secondary-color font-bold text-sm mb-3">{member.title}</p>
      <p className="font-urbanist italic text-primary-color text-xs leading-relaxed">{member.description}</p>
    </div>
  </div>
);

const ProfilePage = ({ member, onBack }) => (
  <div className="min-h-screen bg-background">
    <div className="container-custom py-8 mt-16">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-secondary-color text-white px-5 py-2.5 rounded-full font-urbanist font-medium text-sm mb-12 hover:opacity-90 transition-opacity"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl overflow-hidden shadow-md mb-6 max-w-sm">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-cream">
              <h2 className="font-urbanist text-lg font-bold text-primary-color mb-1">{member.name}</h2>
              <p className="font-urbanist text-secondary-color font-bold text-sm mb-3">{member.title}</p>
              <p className="font-urbanist italic text-primary-color text-xs leading-relaxed">{member.description}</p>
            </div>
          </div>
          
          <div className="space-y-1.5 mb-6 max-w-sm">
            <p className="font-urbanist text-primary-color text-sm">
              Credentials: <span className="font-semibold">{member.credentials}</span>
            </p>
            <p className="font-urbanist text-primary-color text-sm">
              Age Groups: <span className="font-semibold">{member.age}</span>
            </p>
            <p className="font-urbanist text-primary-color text-sm">
              Languages: <span className="font-semibold">{member.languages}</span>
            </p>
          </div>
          
          <div className="max-w-sm flex items-center justify-between gap-4">
            <p className="font-urbanist text-primary-color text-sm font-semibold">
              Book a session with<br />{member.name.split(' ')[0]} today.
            </p>
            <button className="bg-button-main text-primary-color font-urbanist font-bold text-sm py-3 px-6 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0">
              Book a session
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-10">
          <div>
            <h2 className="font-urbanist text-secondary-color text-3xl font-normal mb-4">
              About {member.name.split(' ')[0]}
            </h2>
            <p className="font-urbanist text-primary-color text-base leading-relaxed">{member.about}</p>
          </div>

          <div>
            <h2 className="font-urbanist text-secondary-color text-3xl font-normal mb-6">Areas of Focus</h2>
            <ul className="space-y-4">
              {member.areasOfFocus.map((area, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary-color rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="font-urbanist text-primary-color text-base leading-relaxed">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-urbanist text-secondary-color text-3xl font-normal mb-6">
              Her Approach to Therapy
            </h2>
            <ul className="space-y-4">
              {member.approach.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary-color rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="font-urbanist text-primary-color text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeamListPage = ({ onSelectMember, onBack }) => (
  <div className="min-h-screen bg-background">
    <div className="container-custom py-8 mt-16">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-secondary-color text-white px-5 py-2 rounded-full font-urbanist font-medium text-sm mb-12 hover:opacity-90 transition-opacity"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="text-center mb-12">
        <h1 className="font-autumn text-4xl md:text-5xl lg:text-6xl mb-4 relative inline-block">
          <span className="text-primary-color">Meet Our </span>
          <span className="text-secondary-color italic relative">
            Expert Team
            <svg className="absolute -bottom-2 left-0 w-full h-8" viewBox="0 0 400 20" preserveAspectRatio="none">
              <path d="M10,15 Q100,8 200,12 T390,15" stroke="#DAE562" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M20,18 Q110,11 210,15 T400,18" stroke="#DAE562" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
            </svg>
          </span>
        </h1>
        <p className="font-urbanist text-secondary-color text-sm max-w-2xl mx-auto mt-8">
          Our certified therapists are here to guide, support, and help your child grow, one step at a time.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
          Clinical psychologist & Behaviour Therapist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.psychologists.map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => onSelectMember(member)}
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
          Occupational Therapist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.psychologists.slice(0, 3).map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => onSelectMember(member)}
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
          Speech and hearing language pathologist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.psychologists.map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => onSelectMember(member)}
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
          Special educator
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.psychologists.map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => onSelectMember(member)}
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
          Developmental therapist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.psychologists.slice(0, 3).map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => onSelectMember(member)}
            />
          ))}
        </div>
      </section>
    </div>
  </div>
);

const MeetOurTeam = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedMember, setSelectedMember] = useState(null);

  const handleViewFullTeam = () => {
    setCurrentView('list');
  };

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setCurrentView('profile');
  };

  const handleBackFromProfile = () => {
    setCurrentView('list');
    setSelectedMember(null);
  };

  const handleBackFromList = () => {
    setCurrentView('home');
  };

  if (currentView === 'profile' && selectedMember) {
    return <ProfilePage member={selectedMember} onBack={handleBackFromProfile} />;
  }

  if (currentView === 'list') {
    return <TeamListPage onSelectMember={handleSelectMember} onBack={handleBackFromList} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12">
        <div className="text-center mb-12 mt-16">
          <h1 className="font-autumn text-4xl md:text-5xl lg:text-6xl mb-4 relative inline-block">
            <span className="text-primary-color">Meet Our </span>
            <span className="text-secondary-color italic relative">
              Expert Team
              <svg className="absolute -bottom-2 left-0 w-full h-8" viewBox="0 0 400 20" preserveAspectRatio="none">
                <path d="M10,15 Q100,8 200,12 T390,15" stroke="#DAE562" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M20,18 Q110,11 210,15 T400,18" stroke="#DAE562" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
              </svg>
            </span>
          </h1>
          <p className="font-urbanist text-secondary-color text-sm max-w-2xl mx-auto mt-6">
            Our certified therapists are here to guide, support, and help your child grow, one step at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {teamData.psychologists.slice(0, 3).map((member) => (
            <HomeTeamCard 
              key={member.id} 
              member={member} 
              onClick={() => handleSelectMember(member)}
            />
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={handleViewFullTeam}
            className="bg-button-main text-primary-color font-urbanist font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            View Full Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;