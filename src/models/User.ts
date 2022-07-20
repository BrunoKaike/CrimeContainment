import { sequelize } from '../instances/mysql'


export const LoginAuthentication = async (id: string, passwd:string ) => {
    
    {
        const [results, metadata] = await sequelize.query(
        `select *
        from gestor
        where cpf_gestor = ${id} and password = ${passwd};`
        );
        
        if (results.length > 0){
            return {result: results[0], type: "gestor"};
        }
    }

    return null;
} 

