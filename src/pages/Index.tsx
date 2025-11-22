import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('works');

  const works = [
    {
      id: 1,
      title: 'Абстрактная композиция №1',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/06269eb8-37f3-4d37-9419-377003f2cf50/files/15c45c6d-f81b-43ac-8339-9824af100c49.jpg',
      category: 'Цифровое искусство'
    },
    {
      id: 2,
      title: 'Градиентные формы',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/06269eb8-37f3-4d37-9419-377003f2cf50/files/d6021690-8941-44e8-8a1f-5a8d5e9d64dd.jpg',
      category: 'Современное искусство'
    },
    {
      id: 3,
      title: 'Цветовой поток',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/06269eb8-37f3-4d37-9419-377003f2cf50/files/796c1ad0-b6ce-4216-a104-23cf46c63b26.jpg',
      category: 'Экспериментальное'
    }
  ];

  const timeline = [
    { year: '2024', event: 'Персональная выставка в галерее "Современник"' },
    { year: '2023', event: 'Участие в биеннале современного искусства' },
    { year: '2022', event: 'Получение диплома Академии художеств' },
    { year: '2021', event: 'Первая групповая выставка' }
  ];

  const exhibitions = [
    { title: 'Персональная выставка "Цифровые грани"', location: 'Галерея "Современник"', year: '2024', status: 'upcoming' },
    { title: 'Биеннале современного искусства', location: 'Центральный выставочный зал', year: '2023', status: 'completed' },
    { title: 'Групповая выставка "Новое поколение"', location: 'Арт-центр "Пространство"', year: '2023', status: 'completed' }
  ];

  const achievements = [
    { title: 'Лауреат премии молодых художников', year: '2024' },
    { title: 'Грант на развитие творческих проектов', year: '2023' },
    { title: 'Диплом с отличием Академии художеств', year: '2022' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <section className="mb-24 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-6 animate-scale-in" />
          </div>
          <h1 className="text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Имя Художника
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Современный художник, работающий на стыке цифрового и традиционного искусства
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="group">
              <Icon name="Mail" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Связаться
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Icon name="Download" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Скачать портфолио
            </Button>
          </div>
        </section>

        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          <Button
            variant={activeTab === 'works' ? 'default' : 'outline'}
            onClick={() => setActiveTab('works')}
            className="px-8"
          >
            Галерея работ
          </Button>
          <Button
            variant={activeTab === 'bio' ? 'default' : 'outline'}
            onClick={() => setActiveTab('bio')}
            className="px-8"
          >
            Биография
          </Button>
          <Button
            variant={activeTab === 'exhibitions' ? 'default' : 'outline'}
            onClick={() => setActiveTab('exhibitions')}
            className="px-8"
          >
            Выставки
          </Button>
          <Button
            variant={activeTab === 'achievements' ? 'default' : 'outline'}
            onClick={() => setActiveTab('achievements')}
            className="px-8"
          >
            Достижения
          </Button>
        </div>

        {activeTab === 'works' && (
          <section className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, index) => (
                <Card
                  key={work.id}
                  className="group overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 border-primary/20 hover:border-primary/60"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <Badge className="mb-2 bg-primary/80">{work.category}</Badge>
                        <h3 className="text-xl font-display font-bold mb-1">{work.title}</h3>
                        <p className="text-sm text-gray-300">{work.year}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'bio' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border-primary/20">
              <h2 className="text-4xl font-display font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                О художнике
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground mb-12">
                <p>
                  Современный художник, исследующий границы между цифровым и традиционным искусством. 
                  Работы отличаются яркими цветовыми решениями и экспериментальным подходом к композиции.
                </p>
                <p>
                  Образование получено в Академии художеств, специализация – современное искусство и 
                  мультимедиа. Работы представлены в частных коллекциях и галереях.
                </p>
              </div>

              <h3 className="text-3xl font-display font-bold mb-8 text-primary">
                Творческий путь
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start group animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-display font-bold text-primary-foreground">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow pt-4">
                      <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-4" />
                      <p className="text-lg text-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        )}

        {activeTab === 'exhibitions' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <div className="space-y-6">
              {exhibitions.map((exhibition, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 border-primary/20 hover:border-primary/60 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {exhibition.title}
                        </h3>
                        {exhibition.status === 'upcoming' && (
                          <Badge className="bg-accent">Предстоящая</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          {exhibition.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Icon name="Calendar" size={16} />
                          {exhibition.year}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="group">
                      <Icon name="ExternalLink" className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                      Подробнее
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-8 hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/60 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <Icon name="Award" size={28} className="text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="text-primary text-lg font-semibold">{achievement.year}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section className="mt-24 text-center animate-fade-in">
          <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
            <h2 className="text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Свяжитесь со мной
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Открыт для сотрудничества, коммерческих проектов и участия в выставках
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group">
                <Icon name="Mail" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                email@example.com
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Icon name="Instagram" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Instagram
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Icon name="Phone" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                +7 (999) 123-45-67
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
