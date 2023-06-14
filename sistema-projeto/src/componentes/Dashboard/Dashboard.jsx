import { Bar, Pie, Line } from 'react-chartjs-2';
import data from '../../data.json';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = () => {
  // Contagem dos funcionários por departamento
  const countByDepartment = data.reduce((count, item) => {
    count[item.departamento] = (count[item.departamento] || 0) + 1;
    return count;
  }, {});

  const chartData = {
    labels: Object.keys(countByDepartment),
    datasets: [
      {
        data: Object.values(countByDepartment),
        backgroundColor: ['rgba(37, 99, 180, 0.6)', 'rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const salaryData = {
    labels: data.map(item => item.nome),
    datasets: [
      {
        label: 'Salário',
        data: data.map(item => item.salario),
        backgroundColor: 'rgba(26, 84, 209, 0.6)',
        borderColor: '#2632d8',
        borderWidth: 1,
      },
    ],
  };

  const ageData = {
    labels: data.map(item => item.nome),
    datasets: [
      {
        label: 'Idade',
        data: data.map(item => item.idade),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 100%', maxWidth: '100%', border: '1px solid #000', borderRadius: '4px', padding: '10px' }}>
          <h2 style={{ fontSize: '16px', textAlign: 'center', marginBottom: '10px' }}>Contagem por Departamento</h2>
          <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
            <Pie data={chartData} />
          </div>
        </div>
        <div style={{ flex: '1 1 100%', maxWidth: '100%', border: '1px solid #000', borderRadius: '4px', padding: '10px' }}>
          <h2 style={{ fontSize: '16px', textAlign: 'center', marginBottom: '50px' }}>Salários</h2>
          <div style={{ width: '400px', height: '300px', margin: '0 auto' }}>
            <Bar data={salaryData} />
          </div>
        </div>
        <div style={{ flex: '1 1 100%', maxWidth: '100%', border: '1px solid #000', borderRadius: '4px', padding: '10px' }}>
          <h2 style={{ fontSize: '16px', textAlign: 'center', marginBottom: '10px' }}>Idade</h2>
          <div style={{ width: '350px', height: '300px', margin: '0 auto' }}>
            <Line data={ageData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
